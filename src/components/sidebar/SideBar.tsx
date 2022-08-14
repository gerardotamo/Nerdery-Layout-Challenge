import { ReactElement, useState } from 'react';
import { BaseColor } from '../../config/color';
import { Divider } from '../../config/Divider';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';
import List from '../list/List';
import * as style from './syled'
import { ImHome, ImFilesEmpty, ImFileEmpty } from 'react-icons/im'
import { GoFileSymlinkFile, GoGitPullRequest, GoTrashcan } from 'react-icons/go';
import { GrDocumentUpload } from 'react-icons/gr';
import { RiGalleryUploadFill } from 'react-icons/ri';
import { FaFolderPlus } from 'react-icons/fa';
import { CgMore } from 'react-icons/cg';
import { IconType } from 'react-icons';
import { Rectangule } from '../Rectangule/Rectangule';
import { BsPlusLg } from 'react-icons/bs';

interface Aux {
  name: string,
  icon: IconType
}

interface Props {
  position: number;
  handleClick: (pos: number) => void
}
const SideBar = ({ position, handleClick }: Props) => {
  const options: Aux[] = [
    { name: "Home", icon: ImHome },
    { name: "My files", icon: ImFilesEmpty },
    { name: "Recent Files", icon: ImFileEmpty },
    { name: "Shared Filed", icon: GoFileSymlinkFile },
    { name: "Filed Request", icon: GoGitPullRequest },
    { name: "Trash", icon: GoTrashcan },
  ];

  const options2: Aux[] = [
    { name: "Upload files", icon: GrDocumentUpload },
    { name: "Upload folder", icon: RiGalleryUploadFill },
    { name: "New folder", icon: FaFolderPlus },
    { name: "More", icon: CgMore },
  ];


  return (
    <style.Content>
      <div>
        <style.ColorPalette />
        <List options={options} position={position} handleClick={handleClick} />
        <Divider color={BaseColor.dividerPrimaryColor} />
      </div>

      <div style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column', justifyContent: 'space-around', marginBottom: '15px'
      }}>
        <style.DialogContent >
          <List options={options2} />
        </style.DialogContent>
        <Button heigth='30px' width='67%' color={BaseColor.orangePrimaryColor} style={{ position: 'relative' }}>
          <Text color={BaseColor.whiteColor} size={10} style={{ marginLeft: '-15px' }}>
            Create New
          </Text>
          <Rectangule backgroundColor={BaseColor.orangeSecondaryColor} borderColor='transparent'
            borderRadius={4} height='21px' width='21px' style={{ position: 'absolute', top: 5, right: 0,
            display: 'flex', justifyContent:'center' , alignItems:'center'
          }}
          >
            <BsPlusLg  color={BaseColor.whiteColor} />
          </Rectangule>
        </Button>
      </div>
    </style.Content>
  )
}

export default SideBar;