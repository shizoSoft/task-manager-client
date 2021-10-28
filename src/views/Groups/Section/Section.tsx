import { Heading, Pane } from 'evergreen-ui';

import { ChildrenProps } from 'types';

interface SectionProps extends ChildrenProps {
  title: string;
}

function Section({ title, children }: SectionProps) {
  return (
    <Pane marginBottom={24}>
      <Heading is="h2" size={800} marginBottom={18}>
        {title}
      </Heading>
      <Pane>{children}</Pane>
    </Pane>
  );
}

export default Section;
