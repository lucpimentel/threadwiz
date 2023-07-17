import React from 'react';
import { Image } from '@nextui-org/react';

export default function Logo() {
  return (
    <div>
      <Image
        width={40}
        height={40}
        src="https://raw.githubusercontent.com/lucpimentel/content_editor_gpt/main/threadwiz.png"
        objectFit="cover"/>
    </div>
  );
}
