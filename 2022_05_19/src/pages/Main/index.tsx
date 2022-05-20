import styled from 'styled-components';

const Main = () => {
  return (
    <MainWrapper>
      <h3>Main 페이지입니다</h3>

      <picture>
        {/* 안됨 */}
        <source
          srcSet='https://eazel-io.s3.ap-northeast-2.amazonaws.com/uploads/immsi/a_400.webp'
          media=' (max-width: 400px)'
          type='image/webp'
        />
        <source
          srcSet='https://eazel-io.s3.ap-northeast-2.amazonaws.com/uploads/immsi/a_800.webp'
          media='(max-width: 800px)'
          type='image/webp'
        />
        <source
          srcSet='https://eazel-io.s3.ap-northeast-2.amazonaws.com/uploads/immsi/a_1200.webp'
          media=' (max-width: 1200px)'
          type='image/webp'
        />
        <source
          srcSet='https://eazel-io.s3.ap-northeast-2.amazonaws.com/uploads/immsi/a_1600.webp'
          media='(max-width: 1600px)'
          type='image/webp'
        />
        {/* 사용 가능하지만 구분을 위해 주석처리함 */}
        {/* <source
          srcSet='https://eazel-io.s3.ap-northeast-2.amazonaws.com/uploads/immsi/a.webp'
          media='(max-width: 8000px)'
          type='image/webp'
        /> */}

        {/* 사용 불가능 */}
        {/* <source
          srcSet='/src/4629e4efd64b4821a934d085cc1bcc38-800h.webp'
          media='(orientation: portrait ) and (min-height: 200px) and (max-height: 800px)'
          type='image/webp'
        />
        <source
          srcSet='/src/4629e4efd64b4821a934d085cc1bcc38-1200h.webp'
          media='(orientation: portrait ) and (min-height: 800px) and (max-height: 3200px)'
          type='image/webp'
        />
        <source
          srcSet='/src/4629e4efd64b4821a934d085cc1bcc38-400.jpg'
          media='(orientation: landscape ) and (min-width: 200px) and (max-width: 400px)'
          type='image/jpeg'
        />
        <source
          srcSet='/src/4629e4efd64b4821a934d085cc1bcc38-800.jpg'
          media='(orientation: landscape ) and (min-width: 400px) and (max-width: 800px)'
          type='image/jpeg'
        />
        <source
          srcSet='/src/4629e4efd64b4821a934d085cc1bcc38-1200.jpg'
          media='(orientation: landscape ) and (min-width: 800px) and (max-width: 1200px)'
          type='image/jpeg'
        />
        <source
          srcSet='/src/4629e4efd64b4821a934d085cc1bcc38-1600.jpg'
          media='(orientation: landscape ) and (min-width: 1200px) and (max-width: 1600px)'
          type='image/jpeg'
        />
        <source
          srcSet='/src/4629e4efd64b4821a934d085cc1bcc38-2800.jpg'
          media='(orientation: landscape ) and (min-width: 1600px) and (max-width: 9000px)'
          type='image/jpeg'
        />

        <source
          srcSet='/src/4629e4efd64b4821a934d085cc1bcc38-800h.jpg'
          media='(orientation: portrait ) and (min-height: 200px) and (max-height: 800px)'
          type='image/jpeg'
        />
        <source
          srcSet='/src/4629e4efd64b4821a934d085cc1bcc38-1200h.jpg'
          media='(orientation: portrait ) and (min-height: 800px) and (max-height: 3200px)'
          type='image/jpeg'
        /> */}

        <img
          src='https://eazel-io.s3.ap-northeast-2.amazonaws.com/uploads/immsi/b.jpeg'
          alt="L'Arc de Triomphe, Wrapped, Paris, 1961-2021"
        />
      </picture>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.div`
  img {
    width: 100%;
  }
`;
