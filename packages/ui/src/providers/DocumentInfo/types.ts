import type {
  ClientCollectionConfig,
  ClientGlobalConfig,
  ClientUser,
  Data,
  DocumentPermissions,
  DocumentPreferences,
  FormState,
  InsideFieldsPreferences,
  SanitizedCollectionConfig,
  SanitizedGlobalConfig,
  TypedUser,
} from 'payload'
import type React from 'react'

export type DocumentInfoProps = {
  readonly action?: string
  readonly AfterDocument?: React.ReactNode
  readonly AfterFields?: React.ReactNode
  readonly apiURL?: string
  readonly BeforeFields?: React.ReactNode
  readonly collectionSlug?: SanitizedCollectionConfig['slug']
  readonly currentEditor: TypedUser
  readonly disableActions?: boolean
  readonly disableCreate?: boolean
  readonly disableLeaveWithoutSaving?: boolean
  readonly docPermissions?: DocumentPermissions
  readonly globalSlug?: SanitizedGlobalConfig['slug']
  readonly hasPublishedDoc: boolean
  readonly hasPublishPermission?: boolean
  readonly hasSavePermission?: boolean
  readonly id?: number | string
  readonly initialData?: Data
  readonly initialState?: FormState
  readonly isEditing?: boolean
  readonly isLocked: boolean
  readonly lastUpdateTime: number
  readonly mostRecentVersionIsAutosaved: boolean
  readonly redirectAfterDelete?: boolean
  readonly redirectAfterDuplicate?: boolean
  readonly unpublishedVersionCount: number
  readonly Upload?: React.ReactNode
  readonly versionCount: number
}

export type DocumentInfoContext = {
  currentEditor?: ClientUser | null | number | string
  docConfig?: ClientCollectionConfig | ClientGlobalConfig
  documentIsLocked?: boolean
  getDocPermissions: (data?: Data) => Promise<void>
  getDocPreferences: () => Promise<DocumentPreferences>
  hasPublishedDoc: boolean
  incrementVersionCount: () => void
  initialData: Data
  initialState?: FormState
  isInitializing: boolean
  lastUpdateTime?: number
  mostRecentVersionIsAutosaved: boolean
  preferencesKey?: string
  setCurrentEditor?: React.Dispatch<React.SetStateAction<ClientUser>>
  setDocFieldPreferences: (
    field: string,
    fieldPreferences: { [key: string]: unknown } & Partial<InsideFieldsPreferences>,
  ) => void
  setDocumentIsLocked?: React.Dispatch<React.SetStateAction<boolean>>
  setDocumentTitle: (title: string) => void
  setHasPublishedDoc: React.Dispatch<React.SetStateAction<boolean>>
  setLastUpdateTime: React.Dispatch<React.SetStateAction<number>>
  setMostRecentVersionIsAutosaved: React.Dispatch<React.SetStateAction<boolean>>
  setUnpublishedVersionCount: React.Dispatch<React.SetStateAction<number>>
  title: string
  unlockDocument: (docId: number | string, slug: string) => Promise<void>
  unpublishedVersionCount: number
  updateDocumentEditor: (docId: number | string, slug: string, user: ClientUser) => Promise<void>
  versionCount: number
} & DocumentInfoProps
