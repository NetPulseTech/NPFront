import React, { FC, useState } from 'react'
import { UserDropDownInterFace } from '../LayoutTypes'
import { Dropdown, DropdownMenu, DropdownToggle, Input } from 'reactstrap'
import { ChoosePhoto, Href, RemovePhoto, SetPosition, UploadPhoto } from '../../utils/constant'
import DynamicFeatherIcon from '@/Common/DynamicFeatherIcon'
import UpdateImageModal from './UpdateImageModal'

const UserDropDown:FC<UserDropDownInterFace> = ({dropDownOpen,toggleDropDown}) => {
    const [dropDown, setDropDown] = useState(false)
    const toggle  = ()=>setDropDown(!dropDown) 
  return (
    <>
    <Dropdown isOpen={dropDownOpen} toggle={toggleDropDown} className="setting-dropdown btn-group custom-dropdown arrow-none dropdown-sm">
        <DropdownToggle color="transparent">
          <a className="btn-white btn-cover" href="#">edit cover</a>
        </DropdownToggle>
        <DropdownMenu>
          <ul>
            <li onClick={toggle}>
              <a href={Href}><DynamicFeatherIcon iconName="Image" className="icon-font-light iw-16 ih-16"/>{ChoosePhoto}</a>
            </li>
            <li className="choose-file">
              <a href={Href}><DynamicFeatherIcon iconName="Upload" className="icon-font-light iw-16 ih-16"/>{UploadPhoto}</a>
              <Input type="file" />
            </li>
            <li>
              <a href={Href}><DynamicFeatherIcon iconName="Maximize" className="icon-font-light iw-16 ih-16"/>{SetPosition}</a>
            </li>
            <li>
              <a href={Href}><DynamicFeatherIcon iconName="Trash2" className="icon-font-light iw-16 ih-16"/>{RemovePhoto}</a>
            </li>
          </ul>
        </DropdownMenu>
      </Dropdown>
      <UpdateImageModal isOpen={dropDown} toggle={toggle} updateBackGround />

    </>
  )
}

export default UserDropDown