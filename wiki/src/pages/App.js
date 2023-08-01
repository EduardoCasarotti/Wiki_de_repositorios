import gitlogo from '../assets/github.png';
import { Container } from './styles';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
function App() {
  return (
    <Container>
      <img src={gitlogo} width={72} height={72}/>
      <Input/>
      <ItemRepo/>
    </Container>
  );
}

export default App;
