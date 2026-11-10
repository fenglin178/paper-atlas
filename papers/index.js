// Add one entry for each new paper. Each entry links to its standalone HTML page.
const PAPERS = [
  {
    title: 'Efficient Streaming Language Models with Attention Sinks',
    arxiv: '2309.17453',
    venue: 'ICLR 2024',
    date: '2023-09-29',
    tags: ['Attention Sink', 'Transformer', 'Efficient Inference'],
    description: 'StreamingLLM：为什么初始 KV 是稳定流式推理的关键？解析注意力汇聚、固定缓存、位置编码及原文消融实验。',
    page: 'papers/2309.17453.html'
  },
  {
    title: 'When Attention Sink Emerges in Language Models: An Empirical View',
    arxiv: '2410.10781',
    venue: 'ICLR 2025 · Spotlight',
    date: '2024-10-14',
    tags: ['Attention Sink', 'Transformer', 'Interpretability'],
    description: '通过受控预训练实验，研究 Attention Sink 如何形成、为什么聚集于特定 token，以及 Key Bias 和 Softmax 归一化的作用。',
    page: 'papers/2410.10781.html'
  },
  {
    title: 'Gated Attention for Large Language Models: Non-linearity, Sparsity, and Attention-Sink-Free',
    arxiv: '2505.06708',
    venue: 'arXiv · v1 精读',
    date: '2025-05-10',
    tags: ['Gated Attention', 'Attention Sink', 'Transformer', 'Interpretability'],
    description: '输出门控为何有效？解析低秩映射、输入依赖稀疏性、训练稳定性与长上下文外推，结合原文消融和审稿评价。',
    page: 'papers/2505.06708.html'
  },
  {
    title: 'A Mechanistic Account of Attention Sinks in GPT-2',
    arxiv: '2604.14722',
    venue: 'ACL 2026 · Short Papers',
    date: '2026-11-10',
    tags: ['Attention Sink', 'GPT-2', 'Interpretability', 'Mechanistic Interpretability'],
    description: '全文精读：Query Bias、EPE、Key Projection 如何共同形成 Attention Sink？数学分解、Table 1 因果干预、证据边界与后续实验。',
    page: 'papers/2026.acl-short.9.html'
  }
];