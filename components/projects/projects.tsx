import CollapsibleList from '@/components/ui/collapsible-list';
import {Panel, PanelHeader, PanelTitle, PanelTitleSup} from '@/components/ui/panel';
import {PanelTitleCopy} from '@/components/ui/panel-title-copy';
import {PROJECTS} from '@/data/projects';

import {ProjectItem} from './project-item';

const ID = 'projects';

export function Projects() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Projects</a>
          <PanelTitleSup>({PROJECTS.length})</PanelTitleSup>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={PROJECTS}
        max={4}
        keyExtractor={(item) => item.id}
        renderItem={(item) => <ProjectItem project={item} />}
      />
    </Panel>
  );
}
