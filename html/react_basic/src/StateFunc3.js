import {useState} from 'react';

export default function StateFunc3() {

    const [inputWriter,setInputWriter] = useState('');
    const [inputTitle,setInputTitle] = useState('');
    const [comments,setComments] = useState([]);
    const [inputSearch,setInputSearch] = useState('');
    const [searchType,setSearchType] = useState('title');
    const [results,setResults] = useState([]);

    // const handleToggle = () =>{
    //     setInputWriter(inputWriter);
    //     console.log(inputWriter);
    // }
    // const handleToggle2 = () =>{
    //     setInputTitle(inputTitle);
    // }
    const addComment = () =>{
        console.log("inputWriter",inputWriter);
        console.log("inputTitle",inputTitle);
        const newComment = {
            'writer': inputWriter,
            'title': inputTitle,
        };
         setComments([...comments, newComment]);
         setInputWriter('');
         setInputTitle('');
    }

    const searchComment=()=>{
        const searchResult = comments.filter((value)=>{
            const type = value[searchType];
            const include = type.includes(inputSearch);
            if(!include){
                return false;
            }
            return true;
        });
        
        setResults(searchResult);
 
    }


        return (
            <>
                <form>
                    <label htmlFor="writer">작성자:</label>
                    <input 
                        id="writer" 
                        type="text" 
                        value={inputWriter} 
                        onChange={(e) => 
                        setInputWriter(e.target.value)}
                    />
                    <label htmlFor="title">제목:</label>
                    <input
                        id="title"
                        type="text"
                        value={inputTitle}
                        onChange={(e) => 
                        setInputTitle(e.target.value)
                    }
                    />
                    <button type="button" onClick={addComment}>
                        작성
                    </button>
                </form>
                <form>
                    <select value={searchType} onChange={(e)=>setSearchType(e.target.value)}>
                        <option value="writer">작성자</option>
                        <option value="title">제목</option>
                    </select>
                    <input type="text" placeholder="검색어" value={inputSearch} onChange={(e)=>setInputSearch(e.target.value)}/>
                    <button type="button" onClick={searchComment}>
                        검색
                    </button>
                </form>
                <table border={1} cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comments.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{value.title}</td>
                                    <td>{value.writer}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <h4>검색결과</h4>
                <table border={1} cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((value,index)=>{
                                    return (
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{value.title}</td>
                                        <td>{value.writer}</td>
                                    </tr>
                                    )
                        })}
                    </tbody>
                </table>

                
            </>
        );
    
}