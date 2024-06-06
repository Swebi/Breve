import { DataTable } from "./data-table";
import { columns } from "./columns";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { LinksContext } from "@/contexts/linksContext";
import { serverUrl } from "@/helpers/Constants";

export default function TablePage() {
  const { links, setLinks } = useContext(LinksContext);

  const [urlDetails, setUrlDetails] = useState([]);

  const fetchUrlDetails = async (shortcode) => {
    try {
      const response = await axios.get(`${serverUrl}/info/${shortcode}`);
      setUrlDetails((prevDetails) => [...prevDetails, response.data]);
    } catch (error) {
      console.error(`Failed to fetch URL details: ${error}`);
    }
  };

  useEffect(() => {
    const fetchAllUrlDetails = async () => {
      try {
        const promises = links.map((link) =>
          axios.get(`${serverUrl}/info/${link}`)
        );
        const responses = await Promise.all(promises);
        setUrlDetails(responses.map((response) => response.data));
      } catch (error) {
        console.error(`Failed to fetch URL details: ${error}`);
      }
    };
    fetchAllUrlDetails();
  }, [links]);

  // In this code, Promise.all waits for all the promises in the array to resolve, and then returns an array
  // of the resolved values in the same order. This ensures that all the requests have completed before
  // the state is updated, preventing duplicates.

  // const promises = links.map((link) => axios.get(${serverUrl}/info/${link}));:
  // This line creates an array of promises. It maps over the links array and for each link, it makes an HTTP GET request using Axios
  // to fetch details from the server. However, it only creates the promises; it doesn't execute them yet.

  // const responses = await Promise.all(promises);: This line awaits all the promises to resolve.
  // Promise.all takes an array of promises and returns a single Promise that resolves when all of the promises in the iterable argument
  //  have resolved. In this case, it waits for all the HTTP requests to complete.
  // Once they're all done, responses will be an array of response objects.

  // setUrlDetails(responses.map((response) => response.data));: After all promises have resolved, this line extracts the data
  //  from each response object and updates the state variable urlDetails with an array of URL details.

  return (
    <div className="mx-auto">
      <DataTable columns={columns} data={urlDetails} />
    </div>
  );
}
