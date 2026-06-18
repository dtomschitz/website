import Button from '@/components/ui/button';
import {Panel, PanelContent, PanelHeader, PanelTitle} from '@/components/ui/panel';
import {PanelTitleCopy} from '@/components/ui/panel-title-copy';
import {getSocialLinkByName} from '@/data/social-links';

import {EmailButton} from './email-button';

const ID = 'contact';

export function Contact() {
  const github = getSocialLinkByName('github');
  const linkedin = getSocialLinkByName('linkedin');

  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Contact</a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <PanelContent className="space-y-4 py-6">
        <p className="text-base text-balance text-muted-foreground">
          I&apos;m open for freelance projects. Have something in mind? Let&apos;s talk.
        </p>

        <div className="flex flex-wrap gap-2">
          <EmailButton />

          {github && (
            <Button asChild variant="outline">
              <a href={github.href} target="_blank" rel="noopener">
                {github.icon}
                GitHub
              </a>
            </Button>
          )}

          {linkedin && (
            <Button asChild variant="outline">
              <a href={linkedin.href} target="_blank" rel="noopener">
                {linkedin.icon}
                LinkedIn
              </a>
            </Button>
          )}
        </div>
      </PanelContent>
    </Panel>
  );
}
