import React from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { useLocation } from 'react-router-dom';
import Button from '../../../components/common/button/index';
import trash from '../../../assets/images/trash.svg';

const MessageDialog = ({ dialogVisible, dialogInVisible, selectedMessage, onDelete }) => {
  const location = useLocation();
  const path = location.pathname.endsWith('/edit');
  const onConfirmDeleteData = (e) => {
    e.stopPropagation();
    const deleteData = {
      type: 'message',
      id: selectedMessage.id,
    };
    onDelete(deleteData);
  };

  return (
    <div>
      <Dialog
        open={dialogVisible}
        onClose={dialogInVisible}
        className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black/60 z-100"
      >
        <DialogPanel>
          <div className="bg-white rounded-[16px] p-4">
            {path && <Button variant="icon" icon={trash} onClick={onConfirmDeleteData} />}

            {dialogVisible && (
              <div>
                <span className="block">{selectedMessage.profileImageURL}</span>
                <span className="block">{selectedMessage.sender}</span>
                <span className="block">{selectedMessage.relationship}</span>
                <span className="block">{selectedMessage.content}</span>
              </div>
            )}

            <Button size="sm" variant="primary" disabled={false} onClick={dialogInVisible}>
              확인
            </Button>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
};

export default MessageDialog;
