import { Heading, Wrap, WrapItem } from '@chakra-ui/react';
import { FunctionComponent, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Layout } from '../../components/Layout';
import { PropertySummary } from '../../components/PropertySummary';
import { NextChakraLink } from '../../components/NextChakraLink';
import { RootProvider } from '../../components/RootProvider';
import {
  propertiesState,
  propertiesCount,
} from '../../components/PropertyStates';

import { properties as propertiesStatic } from '../../utils/sample-data';

interface PropertiesProps {
  cookies?: string;
}

const PropertiesPage: FunctionComponent<PropertiesProps> = ({ cookies }) => {
  const [properties, setProperties] = useRecoilState(propertiesState);
  const count = useRecoilValue(propertiesCount);

  useEffect(() => {
    setTimeout(
      () => properties.length > 0 || setProperties(propertiesStatic),
      200
    );
  });

  return (
    <RootProvider cookies={cookies}>
      <Layout title="Next.js + TypeScript example | View properties">
        <Heading mb={4}>{count} available this weekend</Heading>
        <Wrap>
          {properties.map((property) => (
            <WrapItem key={property.id}>
              <NextChakraLink
                href="/properties/[id]"
                as={`/properties/${property.id}`}
              >
                <PropertySummary property={property} />
              </NextChakraLink>
            </WrapItem>
          ))}
        </Wrap>
      </Layout>
    </RootProvider>
  );
};

export default PropertiesPage;

export { getServerSideProps } from '../../components/RootProvider';
