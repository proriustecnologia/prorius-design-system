import type { Meta, StoryObj } from '@storybook/react'
import { Table, Box } from '@prorius-ui/react'

const meta: Meta<typeof Table> = {
  title: 'Surfaces/Table',
  component: Table,
  decorators: [
    (Story: any) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
  args: {
    children: (
      <>
        <thead>
          <tr>
            <th>Empresa</th>
            <th>Segmento</th>
            <th>Responsável</th>
            <th>Data Cadastro</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Prorius Tecnologia</td>
            <td>Desenvolvimento de Software</td>
            <td>Karine Alves Pereira Nunes</td>
            <td>22/04/2023</td>
            <td>Ativo</td>
          </tr>
          <tr>
            <td>Sousa & Couto</td>
            <td>Contabilidade</td>
            <td>Vinicius do Couto Sousa</td>
            <td>22/04/2023</td>
            <td>Ativo</td>
          </tr>
          <tr>
            <td>TickDev</td>
            <td>Desenvolvimento de Software</td>
            <td>Patrick Pecegueiro</td>
            <td>22/04/2023</td>
            <td>Ativo</td>
          </tr>
        </tbody>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
}
export default meta
export const Primary: StoryObj<typeof Table> = {}
