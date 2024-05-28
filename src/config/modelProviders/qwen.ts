import { ModelProviderCard } from '@/types/llm';

/**
 * @date 2024-05-28
 * https://help.aliyun.com/zh/dashscope/developer-reference/api-details
 */
const Qwen: ModelProviderCard = {
  chatModels: [
    {
      displayName: 'qwen-turbo',
      enabled: true,
      id: 'qwen-turbo',
      tokens: 6144,
    },
    {
      displayName: 'qwen-plus',
      enabled: true,
      id: 'qwen-plus',
      tokens: 32_768,
    },
    {
      displayName: 'qwen-max',
      enabled: true,
      id: 'qwen-plus',
      tokens: 6144,
    },
  ],
  id: 'qwen',
};

export default Qwen;
