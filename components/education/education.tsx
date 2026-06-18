import {Panel, PanelHeader, PanelTitle} from '@/components/ui/panel';
import {PanelTitleCopy} from '@/components/ui/panel-title-copy';
import {EDUCATION} from '@/data/education';

import {EducationItem} from './education-item';

const ID = 'education';

export function Education() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Education</a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <div className="py-4 pr-2 pl-4">
        <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
          {EDUCATION.map((education) => (
            <EducationItem key={education.id} education={education} />
          ))}
        </div>
      </div>
    </Panel>
  );
}
