import React, { useRef, useState } from 'react';
import { Modal, message } from 'antd';
import AvatarEditor from 'react-avatar-editor';
import Request from '@/request';
import style from './index.less';

interface IAvatarModalProps {
  visible: boolean;
  onModalClose: () => void;
}

const AvatarModal: React.FC<IAvatarModalProps> = ({ visible, onModalClose }) => {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const editorRef = useRef<AvatarEditor | null>(null);
  const [scale, setScale] = useState(1.2);
  const [localFile, setLocalFile] = useState<File | null>(null);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const uploadLocalFile = () => {
    fileRef.current?.click();
  };

  return (
    <Modal
      title="修改头像"
      visible={visible}
      confirmLoading={confirmLoading}
      footer={
        <div className={style.buttons}>
          <button className={`${style.button} ${style.cancel}`} onClick={onModalClose}>
            取消
          </button>
          <button
            className={`${style.button} ${style.confirm}`}
            onClick={() => {
              if (editorRef.current) {
                editorRef.current?.getImage().toBlob((blob) => {
                  if (blob) {
                    setConfirmLoading(true);
                    Request.changeAvatar(new File([blob], 'avatar.png'))
                      .then(() => {
                        message.success('修改头像成功');
                        setConfirmLoading(false);
                        onModalClose();
                      })
                      .catch(() => {
                        message.error('修改头像失败');
                        setConfirmLoading(false);
                      });
                  }
                });
              }
            }}
          >
            确认
          </button>
        </div>
      }
      onCancel={onModalClose}
    >
      <input
        ref={fileRef}
        type="file"
        style={{ display: 'none' }}
        onChange={() => fileRef.current?.files?.[0] && setLocalFile(fileRef.current?.files?.[0])}
      />
      {localFile && (
        <div
          style={{
            width: 'fit-content',
            height: 'fit-content',
            margin: 'auto',
          }}
          onWheel={(e) => {
            let newScale = scale - e.deltaY * 0.001;
            if (newScale < 1) newScale = 1;
            if (newScale > 2.5) newScale = 2.5;
            setScale(newScale);
          }}
        >
          <AvatarEditor ref={editorRef} image={localFile} width={250} height={250} border={50} scale={scale} />
        </div>
      )}
      <button
        className={`${style.button} ${style.upload} ${localFile ? style.reload : ''}`}
        onClick={() => uploadLocalFile()}
      >
        {localFile ? '重新选择' : '选择一张本地图像'}
      </button>
    </Modal>
  );
};

export default AvatarModal;
