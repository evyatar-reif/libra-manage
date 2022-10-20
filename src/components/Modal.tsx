import * as React from 'react';

interface IModal {
    open: boolean;
    children: React.ReactElement;
    onClose: React.MouseEventHandler<HTMLDivElement>;
    closeOnOutsideClick?: boolean;
};

const Modal = (props: IModal) => {

    if(!props.open) {
        return null;
    };

    return (
        <div
        onClick={props.closeOnOutsideClick ? props.onClose: ()=>{}}            className='bg-modal flex justify-center items-center fixed left-0 right-0 top-0 bottom-0 z-[100]'
        >
            <div
                onClick={(e) => e.stopPropagation()}
            >
                {props.children}
            </div>
        </div>
    );
}

export default Modal;