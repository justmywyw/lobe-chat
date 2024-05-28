'use client';

import { Tongyi } from '@lobehub/icons';
import { memo } from 'react';

import ProviderConfig from '../components/ProviderConfig';

const QwenProvider = memo(() => {
  return (
    <ProviderConfig
      checkModel={'qwen-turbo'}
      modelList={{ showModelFetcher: true }}
      provider={'qwen'}
      title={<Tongyi.Combine size={26} type={'color'} />}
    />
  );
});

export default QwenProvider;
