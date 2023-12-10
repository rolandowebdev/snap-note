import PropTypes from 'prop-types'
import { TabPanel } from '@chakra-ui/react'

export const CustomTabPanel = ({ children }) => {
  return (
    <TabPanel
      as='main'
      padding={0}
      mt={4}
      maxH='300px'
      overflowY='auto'
      css={{
        '&::-webkit-scrollbar': {
          width: '5px'
        },
        '&::-webkit-scrollbar-track': {
          width: '6px'
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#FFFFFFA3',
          borderRadius: '24px'
        }
      }}>
      {children}
    </TabPanel>
  )
}

CustomTabPanel.propTypes = {
  children: PropTypes.node.isRequired
}
