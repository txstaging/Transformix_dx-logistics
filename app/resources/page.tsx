import type { Metadata } from 'next';
import OriginalSite from '@/components/original-site';
export const metadata:Metadata={title:"المعرفة"};
export default function Page(){return <OriginalSite view="resources" />;}
