import Mock from 'mockjs'

export default Mock.mock('/list', 'post', {
  success: true,
  message: null,
  'list|1-10': [{
    'id|+1': 1,
    value: 'item' 
  }]
})
