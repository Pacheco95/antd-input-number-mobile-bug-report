import type { NextPage } from 'next'

import {InputNumber} from 'antd'

const Home: NextPage = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh'
    }}>
      <InputNumber style={{ width: '150px'}} placeholder='Type something'/>
    </div>
  )
}

export default Home
