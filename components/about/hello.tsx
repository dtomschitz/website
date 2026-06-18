import Markdown from '@/components/markdown';
import Prose from '@/components/ui/prose';
import {Panel, PanelContent, PanelHeader, PanelTitle} from '@/components/ui/panel';
import {PanelTitleCopy} from '@/components/ui/panel-title-copy';
import {USER} from '@/data/user';

const ID = 'hello';

export function Hello() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Hello</a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <PanelContent className="py-6">
        <Prose>
          <Markdown>{USER.about}</Markdown>
        </Prose>
      </PanelContent>
    </Panel>
  );
}
