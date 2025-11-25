import { ElNotification } from 'element-plus';

export type NotificationType = 'success' | 'warning' | 'info' | 'error';

interface NotificationOptions {
  title?: string;
  message: string;
  type?: NotificationType;
  duration?: number;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

export const notify = ({
  title,
  message,
  type = 'info',
  duration = 3000,
  position = 'top-right',
}: NotificationOptions) => {
  ElNotification({
    title,
    message,
    type,
    duration,
    position,
  });
};

export const notifySuccess = (message: string, title?: string) => {
  notify({
    message,
    title: title || "Sucecss",
    type: 'success',
  });
};

export const notifyError = (message: string, title?: string) => {
  notify({
    message,
    title: title || 'Error',
    type: 'error',
    duration: 4000,
  });
};

export const notifyWarning = (message: string, title?: string) => {
  notify({
    message,
    title: title,
    type: 'warning',
  });
};

export const notifyInfo = (message: string, title?: string) => {
  const { t } = useI18n();
  notify({
    message,
    title: title || t('Info'),
    type: 'info',
  });
};

export const notifyCopySuccess = () => {
  const { t } = useI18n();
  notifySuccess(t('Link copied to clipboard'), t('Copied!'));
};

export const notifyCopyError = () => {
  const { t } = useI18n();
  notifyError(t('Failed to copy link. Please try again.'), t('Copy Failed'));
};
