export type Content = {
  id: string;
  title: string;
  // 작성자 필요 해서 추가
  author: string;
  content: string;
  createdAt: number;
  updatedAt: number | null;
};

export type Contents = Content[];
