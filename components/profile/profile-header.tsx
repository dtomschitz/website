import Image from 'next/image';

import {USER} from '@/data/user';

import {FlipSentences} from './flip-sentences';

export function ProfileHeader() {
  return (
    <div className="screen-line-bottom grid grid-cols-[auto_1fr] grid-rows-[1fr_auto] overflow-y-clip border-x border-line">
      <figure className="relative col-span-2 min-h-32 p-2 sm:col-span-1 sm:col-start-2 sm:min-h-44 sm:p-4" />

      <div className="flex flex-col sm:row-span-2 sm:row-start-1">
        <div className="screen-line-top mt-auto shrink-0 border-r border-line">
          <div className="mx-0.5 my-0.75 flex">
            <Image
              className="size-28 rounded-full object-cover ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-32"
              src={USER.avatar}
              alt={USER.displayName}
              width={128}
              height={128}
              priority
              draggable={false}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="z-1 mt-auto border-t border-line">
          <div className="flex items-center gap-2 pl-4">
            <h1 className="-translate-y-px text-3xl font-semibold tracking-tight">{USER.displayName}</h1>
          </div>

          <FlipSentences sentences={USER.flipSentences} className="h-12.5 border-t border-line py-1 pl-4 sm:h-9" />
        </div>
      </div>
    </div>
  );
}
