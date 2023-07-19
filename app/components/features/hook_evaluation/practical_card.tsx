import React from 'react';
import { Card, Grid, Text, Link } from "@nextui-org/react";
import EvalLoading from './eval_loading';

const EvaluationResult: React.FunctionComponent<{ apiResponse: any; loading: boolean }> = ({ apiResponse, loading }) => {

  const output = apiResponse && apiResponse.output;
  const rationale = output && JSON.parse(output)["Practical value"]["rationale"];
  const score = output && JSON.parse(output)["Practical value"]["score"];

  
  return (
    <Card css={{ p: "$6", mw: "400px" }}>
      <Card.Header>
        <Grid.Container gap={1} alignItems="center">
          <Grid xs={2}>
            <img
              alt="nextui logo"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width="34px"
              height="34px"
            />
          </Grid>
          <Grid xs={10}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              <b>Practical Value</b>
            </Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        {loading ? (
          <EvalLoading />
        ) : (
          <Text style={{ fontSize: '14px' }}>
            {rationale ? JSON.stringify(rationale) : 'No data available'}
          </Text>
        )}
      </Card.Body>
      {!loading && rationale && (
        <Card.Footer>
          <Text>
          <b>Score: </b> {score}/10
          </Text>
        </Card.Footer>
      )}
    </Card>
  );
};

export default EvaluationResult;
