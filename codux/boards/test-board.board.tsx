import { createBoard } from '@wixc3/react-board';

import ExampleComponent from '../../app/components/example';

export default createBoard({
    name: 'Test Board',
    Board: () => <div>
        <ExampleComponent />
        <div className='bg-red-500'>Hello</div>
    </div>
});
