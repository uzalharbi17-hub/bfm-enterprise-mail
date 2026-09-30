<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- All business-data pages consume typed empty collections from `src/lib/domain.ts`; this preserves a clean backend seam and prevents demo data.
- All visible interface copy is resolved through `src/lib/i18n.tsx`; this keeps English and Arabic direction-aware and complete.
- Shared app chrome lives in `src/components/app-shell.tsx`, while each major product area remains a separate TanStack route for scalable navigation and metadata.
