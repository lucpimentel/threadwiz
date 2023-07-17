import { Card, Text } from '@nextui-org/react';
import RepurposerLoading from './repurposer_loading';

export default function RepurposerCardContent({ apiResponse, loading }) {
  return (
    <Card css={{ mw: '400px' }}>
      <Card.Body>
        {loading ? (
          <RepurposerLoading />
        ) : (
          <Text>{apiResponse}</Text>
        )}
      </Card.Body>
    </Card>
  );
}
