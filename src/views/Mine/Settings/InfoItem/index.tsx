import React, { useState } from 'react';
import { EditOutlined } from '@ant-design/icons';
import style from './index.less';

export interface IInfoItemProps<T = string> {
  title: string;
  value?: T;
  valueRender?: (value: T) => React.ReactNode;
  onEdit?: () => void;
  editable?: boolean;
  onSubmit?: (value: T) => void;
  editLabel?: string;
}

const InfoItem: React.FC<IInfoItemProps> = ({
  title,
  value = '',
  editable = false,
  valueRender,
  onEdit,
  onSubmit,
  editLabel = '编辑',
}) => {
  const [valueFake, setValueFake] = useState(value);
  const [isEditShowing, setIsEditShowing] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

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
              onEdit ? onEdit() : toggleEdit();
            }}
          >
            <EditOutlined style={{ color: '#06f', margin: '0 3px 0 0' }} />
            {isEditing ? '取消' : editLabel}
          </span>
        )}
      </div>
      {(!editable || !isEditing) &&
        (valueRender ? (
          <div className={style.value}>{valueRender(value)}</div>
        ) : (
          <p className={style.value}>{value}</p>
        ))}
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
              onSubmit?.(valueFake);
            }
          }}
        />
      )}
    </div>
  );
};

export default InfoItem;
