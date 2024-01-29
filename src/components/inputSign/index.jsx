import './style.css'

import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";

import { useState } from 'react';

const inputSign = (props) => {


    const [isVisiblePassword, setIsVisiblePassword] = useState(false)
    const [isbuttonEye, setIsbuttonEye] = useState(props.buttonEye)

    const changeVisiblePassword = () => {
        isVisiblePassword == false ? setIsVisiblePassword(true) : setIsVisiblePassword(false)
    }

    return (
        <div className="divInputSpan">
            <div className="divInput">
                <input
                    type={isVisiblePassword == true ? "text" : `${props.type}`}
                    name={props.name}
                    className="input"
                    placeholder={props.placeholder}
                    onChange={(e) => {props.setValue(e.target.value)}}
                    value={props?.value}
                />

                {isbuttonEye &&
                    <div>
                        {isVisiblePassword &&
                            < FiEye onClick={() => changeVisiblePassword()} />
                        }
                        {!isVisiblePassword &&
                            <FiEyeOff onClick={() => changeVisiblePassword()} />
                        }
                    </div>
                }


            </div>
            <div className="divSpan">
                <span>{props.span}</span>
            </div>
        </div>
    )

}

export default inputSign;