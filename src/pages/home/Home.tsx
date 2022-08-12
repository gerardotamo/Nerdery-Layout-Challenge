import { Rectangule } from '../../components/Rectangule/Rectangule';
import { BaseColor } from '../../config/color';
import * as style from './style'


const Home = () => {
  return (
    <style.Content>
      <Rectangule backgroundColor={BaseColor.whiteColor} borderColor='transparent'
        borderRadius={5} height='29px' width='100%'
        style={{ display: 'flex', alignItems: 'center', paddingInline:'12px' }}
      >
        <Rectangule backgroundColor='transparent' borderColor={BaseColor.accentGrayColor}
          borderRadius={0} height='15px' width='15px'
        />
        <style.TextInput placeholder={'search'}/>
      </Rectangule>
    </style.Content>
  )
}

export default Home;