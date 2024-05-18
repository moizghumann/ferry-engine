import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import React from 'react'

const CheckLabel = () => {
  return (
    <div>
        <div className="flex items-center space-x-2 mb-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Normal Ferries</Label>
        </div>
    </div>
  )
}

export default CheckLabel