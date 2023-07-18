import React, { useEffect, useState } from 'react';
import { Card, Text } from '@nextui-org/react';
import HookEvaluator from '../../../api/backend/hook_evaluator';
import useLocalStorage from "@/lib/hooks/use-local-storage";
import AttentionEvaluationResult from './attention_card';
import CuriosityEvaluationResult from './curiosity_card';
import PracticalEvaluationResult from './practical_card';

const EvaluationCard = () => {
  // Use the useLocalStorage hook to store the value of 'content'
  const [content, setContent] = useLocalStorage('content', '');

  const [apiResponse, setApiResponse] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Set loading to true before making the API call
        const extractedcontent = content.content.map((item) => item.content[0].text).join(' ')
        console.log(extractedcontent);
        const data = await HookEvaluator(extractedcontent);
        setApiResponse(data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false); // Set loading to false after API call completes (regardless of success or error)
      }
    };

    fetchData();
  }, [content]); // Add content as a dependency to re-fetch data when it changes

  return (
    <>
      <AttentionEvaluationResult apiResponse={apiResponse} loading={loading} />
      <div style={{ height: '20px', background: 'transparent' }}></div>
      <CuriosityEvaluationResult apiResponse={apiResponse} loading={loading} />
      <div style={{ height: '20px', background: 'transparent' }}></div>
      <PracticalEvaluationResult apiResponse={apiResponse} loading={loading} />

      {/* Dummy component to allow for more scrolling */}
      <div style={{ height: '200px', background: 'transparent' }}></div>
    </>
  );
};

export default EvaluationCard;
