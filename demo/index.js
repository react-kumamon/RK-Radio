import React from 'react'
import { render } from 'react-dom'
import Radio from '../src/index'
require('../assets/index.less')

let Group = Radio.Group

const Demo = (
  <Group>
    <Radio value="a">Option A</Radio>
    <Radio value="b">Option B</Radio>
    <Radio value="c">Option C</Radio>
  </Group>
)

render(Demo, document.getElementById('main'))
