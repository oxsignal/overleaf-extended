import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import LeftMenuButton from './left-menu-button'
import GitHubSyncModal from './github-sync-modal'

export default function SyncGitHub() {
  const { t } = useTranslation()
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = useCallback(() => {
    setShowModal(true)
  }, [])

  return (
    <>
      <LeftMenuButton onClick={handleShowModal} icon="github">
        {t('github')}
      </LeftMenuButton>
      <GitHubSyncModal
        show={showModal}
        handleHide={() => setShowModal(false)}
      />
    </>
  )
}
