import React from 'react';
import styled from 'styled-components';

import { WalletTokenBalancesContainer, WalletWethBalanceContainer } from '../../account';
import { CheckMetamaskStateModalContainer } from '../../common/check_metamask_state_modal_container';
import { ColumnNarrow } from '../../common/column_narrow';
import { ColumnWide } from '../../common/column_wide';

const ColumnWideMyWallet = styled(ColumnWide)`
    margin-left: 0;

    &:last-child {
        margin-left: 0;
    }
`;

export const MyWallet = () => (
    <>
        <CheckMetamaskStateModalContainer>
            <ColumnNarrow>
                <WalletWethBalanceContainer />
            </ColumnNarrow>
            <ColumnWideMyWallet>
                <WalletTokenBalancesContainer />
            </ColumnWideMyWallet>
        </CheckMetamaskStateModalContainer>
    </>
);
