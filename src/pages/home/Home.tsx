import { RecentlyCard } from '../../components/RecentlyCard/RecentlyCard';
import { RecentlyCardFile } from '../../components/RecentlyFilesCard/RecentlyCardFile';
import { Rectangule } from '../../components/Rectangule/Rectangule';
import { SharedCard } from '../../components/SharedCard/SharedCard';
import { Text } from '../../components/Text/Text';
import { BaseColor } from '../../config/color';
import { Recently } from '../../interfaces/recently';
import { RecentlyFiles } from '../../interfaces/recentlyFiles';
import { Shared } from '../../interfaces/shared';
import * as style from './style'


const Home = () => {

  const recentlyOpen: Recently[] = [
    { id: 0, name: "App Proyect", created: "20.02.2020", open: 2 },
    { id: 1, name: "Project: fitbit", created: "28.02.2020", open: 2 },
    { id: 2, name: "Client Documents", created: "4.03.2020", open: 4 },
  ]
  const recentlyFyles: RecentlyFiles[] = [
    { id: 0, name: "Travel Landing Page", members: 5, last_modified: "Mar 8, 2020", color: BaseColor.orangePrimaryColor },
    { id: 1, name: "True Photos", members: 12, last_modified: "Mar 8, 2020", color: BaseColor.greenPrimaryColor },
    { id: 2, name: "Dashboard Structure", members: 10, last_modified: "Mar 9, 2020", color: BaseColor.redPrimaryColor },
    { id: 3, name: "Character Illustration", members: 3, last_modified: "Mar 10, 2020", color: BaseColor.orangePrimaryColor },
  ]

  const shared: Shared[] = [
    { id: 0, name: "Landing Page", created: "20.02.2020", open: 2, colors: [BaseColor.greenPrimaryColor, BaseColor.redPrimaryColor] },
    { id: 1, name: "Illustration Pack", created: "28.02.2020", open: 3, colors: [BaseColor.greenPrimaryColor, BaseColor.redPrimaryColor, BaseColor.orangePrimaryColor] },
    { id: 2, name: "CV Design", created: "4.03.2020", open: 2, colors: [BaseColor.greenPrimaryColor, BaseColor.orangePrimaryColor] },
  ]

  return (
    <style.Content>
      <Rectangule backgroundColor={BaseColor.whiteColor} borderColor='transparent'
        borderRadius={5} height='29px' width='100%'
        style={{ display: 'flex', alignItems: 'center', paddingInline: '12px' }}
      >
        <Rectangule backgroundColor='transparent' borderColor={BaseColor.accentGrayColor}
          borderRadius={0} height='15px' width='15px'
        />
        <style.TextInput placeholder={'search'} />
      </Rectangule>

      <style.View style={{
        justifyContent: 'space-between', alignItems: 'center',
        marginBlock: '1%'
      }}>
        <Text color={BaseColor.primaryColor} size={20}>
          Recently Used
        </Text>
        <style.View>
          <Rectangule backgroundColor='transparent' borderColor={BaseColor.primaryColor}
            borderRadius={1} height='15px' width='15px'
          />
          <Rectangule backgroundColor='transparent' borderColor={BaseColor.inactiveSecondaryGrayColor}
            borderRadius={1} height='15px' width='15px'
          />
        </style.View>
      </style.View>

      <style.View style={{ flexFlow: 'row wrap' }}>
        {
          recentlyOpen.map((item, index) => {
            return (
              <RecentlyCard data={item} />
            )
          })
        }
      </style.View>
      <style.View style={{ justifyContent: 'space-between', marginBlock: '1%' }}>
        <Text color={BaseColor.primaryColor} size={20}>
          Recent Files
        </Text>
        <Text color={BaseColor.primaryColor} size={12}>
          View All
        </Text>

      </style.View>
      <style.View>
        <style.Table cellSpacing={0}>
          <tr>
            <style.Th>
              <Text color={BaseColor.inactiveGrayColor} size={12}>
                Name
              </Text>
            </style.Th>
            <style.Th>
              <Text color={BaseColor.inactiveGrayColor} size={12}>
                Members
              </Text>
            </style.Th>
            <style.Th>
              <Text color={BaseColor.inactiveGrayColor} size={12}>
                Last Modified
              </Text>
            </style.Th>
            <style.Th></style.Th>
          </tr>
          {
            recentlyFyles.map((item) => {
              return (
                <RecentlyCardFile data={item} />
              )
            })
          }
        </style.Table>
      </style.View>

      <style.View style={{ justifyContent: 'space-between' }}>
        <Text color={BaseColor.primaryColor} size={20}>
          Shared with me
        </Text>
        <Text color={BaseColor.primaryColor} size={12}>
          View All
        </Text>
      </style.View>
      <style.View style={{ flexFlow: 'row wrap' }}>
        {
          shared.map((item) => {
            return (
              <SharedCard data={item} />
            )
          })
        }
      </style.View>
    </style.Content>
  )
}

export default Home;