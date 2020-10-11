import React from "react"
import {
  Paginator,
  PaginatorCompact,
  Toolbar,
  ToolbarItem,
  ToolbarSeparator,
} from "../../../UI"
import { ThreadModeration } from "../ThreadModeration"
import { IThreadToolbarProps } from "./ThreadToolbar.types"
import ThreadToolbarReplyButton from "./ThreadToolbarReplyButton"

const ThreadToolbarTop: React.FC<IThreadToolbarProps> = ({
  isClosed,
  moderation,
  pagination,
}) => (
  <>
    <Toolbar>
      {pagination.pages > 1 && (
        <>
          <ToolbarItem landscape tablet>
            <PaginatorCompact {...pagination} />
          </ToolbarItem>
          <ToolbarItem desktop>
            <Paginator {...pagination} />
          </ToolbarItem>
        </>
      )}
      <ToolbarSeparator />
      {moderation && (
        <ToolbarItem>
          <ThreadModeration moderation={moderation} />
        </ToolbarItem>
      )}
      <ToolbarItem>
        <ThreadToolbarReplyButton isClosed={isClosed} />
      </ToolbarItem>
    </Toolbar>
    {pagination.pages > 1 && (
      <Toolbar portrait>
        <ToolbarItem fill>
          <PaginatorCompact {...pagination} />
        </ToolbarItem>
      </Toolbar>
    )}
  </>
)

export default ThreadToolbarTop
