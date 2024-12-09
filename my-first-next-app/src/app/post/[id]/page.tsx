type Props = {
  params: {
    id: number;   // 폴더 대괄호의 명과 같아야 함
  };
};

// 동적 라우팅 예시
const PageDetailPage = ({ params }: Props) => {
  return <>ID: {params.id} Page</>;
};

export default PageDetailPage;