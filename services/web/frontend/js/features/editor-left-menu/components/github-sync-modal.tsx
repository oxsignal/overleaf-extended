import Modal from '../../../shared/components/modal'
import { useTranslation } from 'react-i18next'

export default function GitHubSyncModal({ show, handleHide }: { show: boolean, handleHide: () => void }) {
  const { t } = useTranslation()

  return (
    <Modal show={show} onHide={handleHide} title={t('github_sync')}>
      <p>{t('github_sync_explanation')}</p>
      <div className="mb-2">
        <button className="btn btn-primary w-100 mb-2">{t('pull_from_github')}</button>
        <button className="btn btn-outline-secondary w-100">{t('push_to_github')}</button>
      </div>
    </Modal>
  )
}
