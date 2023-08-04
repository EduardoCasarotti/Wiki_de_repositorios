import gitlogo from '../assets/github.png';
import { Container } from './styles';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import { useState } from 'react';
import Button from '../components/Button';
import {api} from '../components/services/api';



function App() {


const [currentRepo, setCurrentRepo] = useState('');
const [repos, setRepos] = useState([]);


const handleSearchRepo = async () => {
  const {data} = await api.get(`repo/${currentRepo}`)
  if(data.id){
    setRepos(prev => [...prev, data])
    setCurrentRepo('')
    return
  }
  alert('Repositório não encontrado')
}
  return (
    <Container>
      <img src={gitlogo} width={72} height={72}/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo =>  <ItemRepo repo={repo}/>)}     
    </Container>
  );
}

export default App;
