import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Cara bermain" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Tebak dalam 6x percobaan. Setiap tebakan, warna dari setiap huruf akan menunjukkan seberapa dekat dengan kalimat asli
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="A"
          status="correct"
        />
        <Cell value="C" />
        <Cell value="C" />
        <Cell value="É" />
        <Cell value="N" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Huruf A ada pada jawaban dan berada di posisi yang benar.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="B" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="Â"
          status="present"
        />
        <Cell value="'" />
        <Cell value="N" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Huruf Â ada pada jawaban namun berada di posisi yang salah.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="S" />
        <Cell value="É" />
        <Cell value="R" />
        <Cell isRevealing={true} isCompleted={true} value="O" status="absent" />
        <Cell value="'" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Huruf O tidak terdapat dalam jawaban
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is an open source version of the word guessing game we all know and
        love -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
