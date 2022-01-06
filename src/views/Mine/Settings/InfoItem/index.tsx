import React, { useState } from 'react';
import { EditOutlined } from '@ant-design/icons';
import style from './index.less';

export interface IInfoItemProps {
  title: string;
  value?: string;
  editable?: boolean;
  onChange?: (value: string) => void;
  editLabel?: string;
}

const InfoItem: React.FC<IInfoItemProps> = ({
  title,
  value = '暂无',
  editable = false,
  onChange,
  editLabel = '编辑',
}) => {
  const [valueFake, setValueFake] = useState(value);
  const [isEditShowing, setIsEditShowing] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div
      className={style.info}
      onMouseEnter={() => setIsEditShowing(true)}
      onMouseLeave={() => setIsEditShowing(false)}
    >
      <div className={style.infoTitle}>
        <span>{title}</span>
        {editable && (
          <span
            style={{ opacity: isEditShowing ? 1 : 0 }}
            className={style.edit}
            onClick={() => {
              setIsEditShowing(false);
              setIsEditing(true);
            }}
          >
            <EditOutlined style={{ color: '#06f', margin: '0 3px 0 0' }} />
            {editLabel}
          </span>
        )}
      </div>
      {(!editable || !isEditing) && <p className={style.value}>{value}</p>}
      {editable && isEditing && (
        <input
          className={style.input}
          type="text"
          value={valueFake}
          onChange={(e) => {
            setValueFake(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setIsEditing(false);
              onChange?.(valueFake);
            }
          }}
        />
      )}
    </div>
  );
};

export default InfoItem;
