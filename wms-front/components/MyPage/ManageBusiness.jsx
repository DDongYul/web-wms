import axios from "axios";
import { useState } from "react";

const ManageBusiness = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [businessInfo, setBusinessInfo] = useState({
        businessName: '',
        businessNumber: '',
        businessImage: ''
    });
    const [isRegistered, setIsRegistered] = useState(false);
    
    // API 호출하여 사업자 정보 가져오기
//     useEffect(() => {
//     axios.get('')
//       .then(response => {
//         const { businessName, businessNumber, businessImage } = response.data;
//         if (businessName && businessNumber && businessImage) {
//           setBusinessInfo({ businessName, businessNumber, businessImage });
//           setIsRegistered(true);
//         }
//         setLoading(false);
//       })
//       .catch(error => {
//         setError(error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setBusinessInfo((prevInfo) => ({
      ...prevInfo,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('businessName', businessInfo.businessName);
    formData.append('businessNumber', businessInfo.businessNumber);
    formData.append('businessImage', businessInfo.businessImage);

    // 여기서 폼 제출 로직을 추가합니다.
    axios.post('', formData)
      .then(response => {
        // 성공 처리
        console.log('사업자 정보가 성공적으로 등록/수정되었습니다.');
      })
      .catch(error => {
        // 오류 처리
        console.error('사업자 정보 등록/수정에 실패했습니다.', error);
      });
  };

  const handleDelete = () => {
    // 사업자 정보 삭제 로직 추가
    axios.delete('')
      .then(response => {
        // 성공 처리
        setBusinessInfo({ businessName: '', businessNumber: '', businessImage: '' });
        setIsRegistered(false);
        console.log('사업자 정보가 성공적으로 삭제되었습니다.');
      })
      .catch(error => {
        // 오류 처리
        console.error('사업자 정보 삭제에 실패했습니다.', error);
      });
  };

  return (
    <div>
      <h2>사업자 등록/수정</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>사업자 이름:</label>
          <input
            type="text"
            name="businessName"
            value={businessInfo.businessName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>사업자 번호:</label>
          <input
            type="text"
            name="businessNumber"
            value={businessInfo.businessNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>사업자 등록증 이미지:</label>
          <input
            type="file"
            name="businessImage"
            onChange={handleChange}
          />
        </div>
        <button type="submit">저장</button>
      </form>
      {isRegistered && (
        <button onClick={handleDelete}>삭제</button>
      )}
    </div>
  );
};

export default ManageBusiness;