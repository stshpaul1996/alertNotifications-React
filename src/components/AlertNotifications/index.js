// Write your code here
import './index.css'

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

const AlertNotifications = () => {
  const renderSuccessView = () => (
    <Notification>
      <AiFillCheckCircle className="icon-success" />
      <div className="content-container">
        <h1 className="heading-success">Success</h1>
        <p className="text-success">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>
  )

  const renderErrorView = () => (
    <Notification>
      <RiErrorWarningFill />
      <div className="content-container">
        <h1>Error</h1>
        <p>Sorry, you are not authorized to have access to delete the file</p>
      </div>
    </Notification>
  )

  const renderWarningView = () => (
    <Notification>
      <MdWarning />
      <div className="content-container">
        <h1>Warning</h1>
        <p>viewers of this file can see comments and suggestions</p>
      </div>
    </Notification>
  )

  const renderInfoView = () => (
    <Notification>
      <MdInfo />
      <div className="content-container">
        <h1>Info</h1>
        <p>Anyone on the internet can view these files</p>
      </div>
    </Notification>
  )

  return (
    <div className="notification-container">
      <h1 className="heading">Alert Notifications</h1>
      {renderSuccessView()}
      {renderErrorView()}
      {renderWarningView()}
      {renderInfoView()}
    </div>
  )
}

export default AlertNotifications
