import { Metadata } from 'next';
import CustomersTable from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';
// import { FormattedCustomersTable } from '@/app/lib/definitions';
import { lusitana } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page(props: {
    searchParams: Promise<{
      query?: string;
      page?: string
    }>}) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const customers = await fetchFilteredCustomers(query);

    return (
        <div>
            <CustomersTable customers={customers} />
        </div>
    );

}