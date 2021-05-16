import React from 'react'
import { styled } from 'stitches.config'

export const Note = styled('p', {
  marginTop: '16px',
  textAlign: 'center'
})

export default function Home() {
  return (
    <div>
      <div className="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="286" height="100" viewBox="0 0 286 100">
          <g fill="none" fill-rule="evenodd">
            <path fill="#F7417A" d="M203.307692,0 L236,32.6923077 L218.692308,50 L186,17.3076923 L203.307692,0 Z M236,67.3076923 L253.307692,50 L286,82.6923077 L268.692308,100 L236,67.3076923 Z M186,82.6923077 L218.692308,50 L236,67.3076923 L203.307692,100 L186,82.6923077 Z M286,17.3076923 L253.307692,50 L236,32.6923077 L268.692308,0 L286,17.3076923 Z"
            />
            <polygon fill="#43E7FD" points="100 99 178 99 178 79 123 79 123 61 175 61 175 41 123 41 123 24 178 24 178 1 100 1" />
            <path fill="#43E7FD" d="M41,74.2525253 L24,74.2525253 L24,24.7575758 L41,24.7575758 C54.6174058,24.7575758 66,36.0174298 66,49.5050505 C66,63.5384988 54.8545952,74.2525253 41,74.2525253 M41,1 L0,1 L0,99 L41,99 C54.4060346,99 66.9004291,94.0306281 76,85.1414141 C85.7679723,75.8619068 91,63.5543045 91,50.4949495 C91,23.139237 68.6108512,1 41,1"
            />
          </g>
        </svg>
      </div>
      <Note>Coming soon, stay tuned.</Note>
    </div>
  )
}
