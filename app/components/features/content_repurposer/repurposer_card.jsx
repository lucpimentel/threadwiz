import React, { useEffect, useState } from 'react';
import { Card, Text } from '@nextui-org/react';
import ContentRepurposer from '../../../api/backend/content_repurposer';
import useLocalStorage from "@/lib/hooks/use-local-storage";
import RepurposerCardContent from './repurposer_card_content';

const EvaluationCard = () => {
  // Use the useLocalStorage hook to store the value of 'content'
  const [content, setContent] = useLocalStorage('content', '');

  const [apiResponse, setApiResponse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Set loading to true before making the API call
        const extractedcontent = content.content.map((item) => item.content[0].text).join(' ')
        console.log(extractedcontent);
        const data = await ContentRepurposer(extractedcontent);
        setApiResponse(data["output"]);
        console.log(apiResponse);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false); // Set loading to false after API call completes (regardless of success or error)
      }
    };

    fetchData();
  }, [content]);


  return (<>
    <RepurposerCardContent apiResponse={apiResponse} loading={loading}/>

    {/* Dummy component to allow for more scrolling */}
    <div style={{ height: '200px', background: 'transparent' }}></div>
  </>);
};


export default EvaluationCard;
